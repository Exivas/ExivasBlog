import express from 'express';
import connect from './Config/db.js';
connect.sync();