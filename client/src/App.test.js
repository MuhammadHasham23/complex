import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {});

//hostname is automatically added in docker-compose but in aws json we have to mention that explictly.
//by giving a hostname it gets to that container as in nginx default.conf.
//essential true means that if this container crashes all other container will be shutdown as well.
//one container should be marked as essential.
//hostPort is port of machine and containerPort is of container.
//links are unidirectional to form a connection from nginx to server and client. The server and client
//are the hostnames of other two containers in this file.
