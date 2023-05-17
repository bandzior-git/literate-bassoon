#!/bin/sh

SCRIPT_HOME=`pwd`
DATE=`date "+%Y%m%d_%H%M%S"`

cd $SCRIPT_HOME/posts
npm start & > $SCRIPT_HOME/log_$DATE.log

cd $SCRIPT_HOME/comments
npm start & >> $SCRIPT_HOME/log_$DATE.log

cd $SCRIPT_HOME/client
npm start & >> $SCRIPT_HOME/log_$DATE.log
