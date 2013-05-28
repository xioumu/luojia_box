
DROP TABLE IF EXISTS detail;

CREATE TABLE IF NOT EXISTS detail (id INT, weekday INT,time TEXT, building TEXT, room TEXT ,primary key(id,weekday,time,building,room));

insert into detail (id,weekday,time,building,room) values(20112002001, 1, '1-18周,每1周,9-10节', '1区新外', '04');
insert into detail (id,weekday,time,building,room) values(20112002002, 1, '1-18周,每1周,3-5节', '1区新外', '17');
insert into detail (id,weekday,time,building,room) values(20112002003, 3, '1-18周,每1周,3-5节', '1区新外', '语音4');
insert into detail (id,weekday,time,building,room) values(20112002004, 3, '1-18周,每1周,7-9节', '1区新外', '07');
insert into detail (id,weekday,time,building,room) values(20112002005, 3, '1-18周,每1周,3-5节', '1区新外', '11');
insert into detail (id,weekday,time,building,room) values(20112002006, 3, '1-18周,每1周,7-9节', '1区新外', '09');
insert into detail (id,weekday,time,building,room) values(20112002007, 2, '1-18周,每1周,3-4节', '1区新外', '16');
insert into detail (id,weekday,time,building,room) values(20112055393, 4, '1-18周,每1周,3-4节', '1区5', '312');
insert into detail (id,weekday,time,building,room) values(20112055394, 1, '1-18周,每1周,3-4节', '1区5', '106');
insert into detail (id,weekday,time,building,room) values(20112055394, 4, '1-17周,每2周,1-2节', '1区5', '305');



drop table if exists lesson;

CREATE TABLE IF NOT EXISTS lesson (id INT UNIQUE, name TEXT,type TEXT,score FLOAT,teacher TEXT);

insert into lesson(id,name,type,score,teacher) values(20112002001, '西方文论简介', '专业选修', 2, '张国庆');
insert into lesson(id,name,type,score,teacher) values(20112002002, '英国文学史与作品选（1）', '专业必修', 3, '鄢畅');
insert into lesson(id,name,type,score,teacher) values(20112002003, '英国文学史与作品选（1）', '专业必修', 3, '龙江');
insert into lesson(id,name,type,score,teacher) values(20112002004, '英国文学史与作品选（1）', '专业必修', 3, '文育玲');
insert into lesson(id,name,type,score,teacher) values(20112002005, '英国文学史与作品选（1）', '专业必修', 3, '程雪猛');
insert into lesson(id,name,type,score,teacher) values(20112002006, '英国文学史与作品选（1）', '专业必修', 3, '程雪猛');
insert into lesson(id,name,type,score,teacher) values(20112002007, '高级英语（2）', '专业必修', 4, '朱宾忠');
insert into lesson(id,name,type,score,teacher) values(20112002008, '高级英语（2）', '专业必修', 4, '赵红英');
insert into lesson(id,name,type,score,teacher) values(20112002009, '高级英语（2）', '专业必修', 4, '文育玲');
insert into lesson(id,name,type,score,teacher) values(20112002010, '高级英语（2）', '专业必修', 4, '牟扬');
insert into lesson(id,name,type,score,teacher) values(20112002011, '高级英语（2）', '专业必修', 4, '姚兰');
insert into lesson(id,name,type,score,teacher) values(20112002012, '英语戏剧选', '专业选修', 2, '戴丹妮');
insert into lesson(id,name,type,score,teacher) values(20112002013, '英语词汇学', '专业选修', 2, '朱书辰');
insert into lesson(id,name,type,score,teacher) values(20112002014, '英汉同声传译', '专业选修', 2, '胡孝申');
insert into lesson(id,name,type,score,teacher) values(20112002015, '西方文明史', '专业选修', 2, '赵南楠');
insert into lesson(id,name,type,score,teacher) values(20112002016, '西方文明史', '专业选修', 2, '赵南楠');
insert into lesson(id,name,type,score,teacher) values(20112002017, '西方文明史', '专业选修', 2, '赵南楠');
insert into lesson(id,name,type,score,teacher) values(20112002018, '西方文明史', '专业选修', 2, '赵南楠');
insert into lesson(id,name,type,score,teacher) values(20112002019, '综合英语（4）', '专业必修', 6, '熊杰平');
insert into lesson(id,name,type,score,teacher) values(20112002020, '综合英语（4）', '专业必修', 6, '王爱菊');
insert into lesson(id,name,type,score,teacher) values(20112002021, '综合英语（4）', '专业必修', 6, '鄢畅');