---
title: 手动安装 MySQL 8.0 服务
date: 2020-04-12 12:57:49  
outline: deep
---

### 下载

- [MySQL-8.x.winx64.zip 压缩包版本](http://ftp.ntu.edu.tw/MySQL/Downloads/MySQL-8.0/mysql-8.0.19-winx64.zip)

- [msi版本](http://ftp.ntu.edu.tw/MySQL/Downloads/MySQL-8.0/mysql-8.0.19-winx64.msi)

- [MySQL Connector/J (Archived Versions)](https://downloads.mysql.com/archives/c-j/)
  
### 准备

- 解压到  
  `D:\Program Files\MySQL\MySQL Server 8.0`

  ```sh
  │─bin
  ├─docs
  ├─include
  ├─lib
  └─share
  ```

- 系统环境变量  
  `D:\Program Files\MySQL\MySQL Server 8.0\bin`

### 新建

  新建 `my.ini` 把下面的内容放到文件里

  ``` bash
  # MySQL Server Instance Configuration File
  # ----------------------------------------------------------------------
  # Generated by the MySQL Server Instance Configuration Wizard
  #
  #
  # Installation Instructions
  # ----------------------------------------------------------------------
  #
  # On Linux you can copy this file to /etc/my.cnf to set global options,
  # mysql-data-dir/my.cnf to set server-specific options
  # (@localstatedir@ for this installation) or to
  # ~/.my.cnf to set user-specific options.
  #
  # On Windows you should keep this file in the installation directory
  # of your server (e.g. C:\Program Files\MySQL\MySQL Server X.Y). To
  # make sure the server reads the config file use the startup option
  # "--defaults-file".
  #
  # To run run the server from the command line, execute this in a
  # command line shell, e.g.
  # mysqld --defaults-file="C:\Program Files\MySQL\MySQL Server X.Y\my.ini"
  #
  # To install the server as a Windows service manually, execute this in a
  # command line shell, e.g.
  # mysqld --install MySQLXY --defaults-file="C:\Program Files\MySQL\MySQL Server X.Y\my.ini"
  #
  # And then execute this in a command line shell to start the server, e.g.
  # net start MySQLXY
  #
  #
  # Guildlines for editing this file
  # ----------------------------------------------------------------------
  #
  # In this file, you can use all long options that the program supports.
  # If you want to know the options a program supports, start the program
  # with the "--help" option.
  #
  # More detailed information about the individual options can also be
  # found in the manual.
  #
  #
  # CLIENT SECTION
  # ----------------------------------------------------------------------
  #
  # The following options will be read by MySQL client applications.
  # Note that only client applications shipped by MySQL are guaranteed
  # to read this section. If you want your own MySQL client program to
  # honor these values, you need to specify it as an option during the
  # MySQL client library initialization.
  #
  [client]

  port=3306
  default-character-set=UTF8MB4
  [mysql]

  default-character-set=UTF8MB4


  # SERVER SECTION
  # ----------------------------------------------------------------------
  #
  # The following options will be read by the MySQL Server. Make sure that
  # you have installed the server correctly (see above) so it reads this
  # file.
  #
  [mysqld]

  # The TCP/IP Port the MySQL Server will listen on
  port=3306


  #Path to installation directory. All paths are usually resolved relative to this.
  basedir="D:/Program Files/MySQL/MySQL Server 8.0/"

  #Path to the database root
  datadir="D:/Program Files/MySQL/MySQL Server 8.0/Data/"

  # The default character set that will be used when a new schema or table is
  # created and no character set is defined
  character-set-server=UTF8MB4

  # The default storage engine that will be used when create new tables when
  default-storage-engine=INNODB

  # The maximum amount of concurrent sessions the MySQL server will
  # allow. One of these connections will be reserved for a user with
  # SUPER privileges to allow the administrator to login even if the
  # connection limit has been reached.
  max_connections=100

  tmp_table_size=18M


  # How many threads we should keep in a cache for reuse. When a client
  # disconnects, the client's threads are put in the cache if there aren't
  # more than thread_cache_size threads from before.  This greatly reduces
  # the amount of thread creations needed if you have a lot of new
  # connections. (Normally this doesn't give a notable performance
  # improvement if you have a good thread implementation.)
  thread_cache_size=8

  #*** MyISAM Specific options

  # The maximum size of the temporary file MySQL is allowed to use while
  # recreating the index (during REPAIR, ALTER TABLE or LOAD DATA INFILE.
  # If the file-size would be bigger than this, the index will be created
  # through the key cache (which is slower).
  myisam_max_sort_file_size=100G

  # If the temporary file used for fast index creation would be bigger
  # than using the key cache by the amount specified here, then prefer the
  # key cache method.  This is mainly used to force long character keys in
  # large tables to use the slower key cache method to create the index.
  myisam_sort_buffer_size=35M

  # Size of the Key Buffer, used to cache index blocks for MyISAM tables.
  # Do not set it larger than 30% of your available memory, as some memory
  # is also required by the OS to cache rows. Even if you're not using
  # MyISAM tables, you should still set it to 8-64M as it will also be
  # used for internal temporary disk tables.
  key_buffer_size=25M

  # Size of the buffer used for doing full table scans of MyISAM tables.
  # Allocated per thread, if a full scan is needed.
  read_buffer_size=64K
  read_rnd_buffer_size=256K

  # This buffer is allocated when MySQL needs to rebuild the index in
  # REPAIR, OPTIMZE, ALTER table statements as well as in LOAD DATA INFILE
  # into an empty table. It is allocated per thread so be careful with
  # large settings.
  sort_buffer_size=256K


  #*** INNODB Specific options ***

  # If set to 1, InnoDB will flush (fsync) the transaction logs to the
  # disk at each commit, which offers full ACID behavior. If you are
  # willing to compromise this safety, and you are running small
  # transactions, you may set this to 0 or 2 to reduce disk I/O to the
  # logs. Value 0 means that the log is only written to the log file and
  # the log file flushed to disk approximately once per second. Value 2
  # means the log is written to the log file at each commit, but the log
  # file is only flushed to disk approximately once per second.
  innodb_flush_log_at_trx_commit=1

  # The size of the buffer InnoDB uses for buffering log data. As soon as
  # it is full, InnoDB will have to flush it to disk. As it is flushed
  # once per second anyway, it does not make sense to have it very large
  # (even with long transactions).
  innodb_log_buffer_size=1M

  # InnoDB, unlike MyISAM, uses a buffer pool to cache both indexes and
  # row data. The bigger you set this the less disk I/O is needed to
  # access data in tables. On a dedicated database server you may set this
  # parameter up to 80% of the machine physical memory size. Do not set it
  # too large, though, because competition of the physical memory may
  # cause paging in the operating system.  Note that on 32bit systems you
  # might be limited to 2-3.5G of user level memory per process, so do not
  # set it too high.
  innodb_buffer_pool_size=47M

  # Size of each log file in a log group. You should set the combined size
  # of log files to about 25%-100% of your buffer pool size to avoid
  # unneeded buffer pool flush activity on log file overwrite. However,
  # note that a larger logfile size will increase the time needed for the
  # recovery process.
  innodb_log_file_size=24M

  # Number of threads allowed inside the InnoDB kernel. The optimal value
  # depends highly on the application, hardware as well as the OS
  # scheduler properties. A too high value may lead to thread thrashing.
  innodb_thread_concurrency=10

  ```

### 启动 MySQL 服务

- 在 bin 文件夹中打开 `管理员权限` CMD 窗口
- 手动安装 MySQL 8.0：

  ``` bash
  mysqld --install
  mysqld --initialize --console
  # 2020-05-08T06:16:24.807158Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: eugpo8khwJ:g
  # 然后输入
  net start mysql
  # 首次登录
  mysql -u root -p
  # 输入刚才的默认初始密码
  Enter password:**********
  # 登录成功后
  mysql> use mysql
  # 重新修改密码
  # ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.
  mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
  mysql> exit
  ```

- 重新登陆 MySQL

  ``` bash
  mysql -uroot -p
  # 输入重置密码 root
  Enter password: ****
  mysql> exit
  ```

### 关闭 MySQL 服务

  ```sh
  # 停止 MySQL 服务
  net stop mysql
  # 删除 MySQL 服务
  sc delete mysql
  # 移除 MySQL 注册信息
  regedit -> 编辑 -> 查找 -> mysql
  ```

### 开启远程服务

  ```sh
  mysql -uroot -p
  Enter password: ****
  mysql> use mysql
  mysql> select User,Host from user;
  +------------------+-----------+
  | User             | Host      |
  +------------------+-----------+
  | mysql.infoschema | localhost |
  | mysql.session    | localhost |
  | mysql.sys        | localhost |
  | root             | localhost |
  +------------------+-----------+
  4 rows in set (0.00 sec)

  mysql> CREATE USER 'root'@'%' IDENTIFIED BY 'root';
  mysql> GRANT ALL ON *.* TO 'root'@'%' WITH GRANT OPTION;
  mysql> flush privileges;

  mysql> select User,Host from user;
  +------------------+-----------+
  | User             | Host      |
  +------------------+-----------+
  | root             | %         |
  | mysql.infoschema | localhost |
  | mysql.session    | localhost |
  | mysql.sys        | localhost |
  | root             | localhost |
  +------------------+-----------+  
  5 rows in set (0.00 sec)

  mysql> exit
  Bye  
  ```
