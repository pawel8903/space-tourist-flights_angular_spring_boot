drop database if exists SpaceTravel;
create database SpaceTravel;
use SpaceTravel;
create table gender(
	id int(11) auto_increment,
    gender varchar(128) unique not null,
    PRIMARY KEY (id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table country(
	id int(11) not null auto_increment,
    country varchar(128) unique not null,
    
    PRIMARY KEY (id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table `tourist`(
	`id` int(11) not null auto_increment,
	`firstname` varchar(128),
    `lastname` varchar(128),
	`gender` varchar(128),
    `country` varchar(128),
    `remarks` varchar(255),
	`dateofbirth` date,
    
    PRIMARY KEY (id),
    
    foreign key (gender) references gender(gender),
    foreign key (country) references country(country)
    
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table `flight`(
	`id` int(11) not null auto_increment,
    `departure` datetime,
    `arrival` datetime,
    `numberofseats` int(11),
    `ticketprice` double,
    
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table touristlistofflights(
	tourist_id int(11) not null,
    flight_id int(11) not null,
    
    primary key (tourist_id, flight_id),
    
    foreign key (tourist_id) references tourist(id),
    foreign key (flight_id) references flight(id)
    
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into gender values(null,'Male'),(null,'Female');
insert into country values(null,'Poland'),(null,'England');
insert into tourist values (null,'Paweł','Kowalski','Male','Poland','Seat near window','2000-01-01');
insert into tourist values (null,'Basia','Kowalski','Female','England','Seat near window','2000-01-01');
insert into tourist values (null,'Tadeusz','Jakis','Male','Poland','Seat near window','2000-01-01');
insert into tourist values (null,'Basia','Zielinska','Female','England','Seat near window','2000-01-01');
insert into flight values (null,'2019-07-12 10:00:00','2019-07-15 13:00:00',3,'200.10');
insert into flight values (null,'2019-07-19 10:00:00','2019-07-21 13:00:00',3,'200.10');
insert into touristlistofflights values(1,1);
insert into touristlistofflights values(2,1)

