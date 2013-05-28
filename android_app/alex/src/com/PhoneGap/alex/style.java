package com.PhoneGap.alex;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.widget.LinearLayout;

public class style extends Activity{
	Handler mHandler;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		setContentView(R.layout.style);
		Thread th = new Thread(r);
		th.start();
		mHandler = new Handler(){

			@Override
			public void handleMessage(Message msg) {
				// TODO Auto-generated method stub
				if(msg.what==0x0000){
					Intent intent = new Intent(style.this,alex.class);
					startActivity(intent);
				}
				super.handleMessage(msg);
			}
			
		};
		
	}
	Runnable r = new Runnable(){

		@Override
		public void run() {
			// TODO Auto-generated method stub
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			Message me = new Message();
			me.what = 0x0000;
			mHandler.sendMessage(me);
		}
		
	};
}
