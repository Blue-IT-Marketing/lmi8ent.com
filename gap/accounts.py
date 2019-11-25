import os
import webapp2
import jinja2
from google.appengine.ext import ndb
from google.appengine.api import users
import logging,json


class User (ndb.Expando):
    uid = ndb.StringProperty()
    names = ndb.StringProperty()
    surname = ndb.StringProperty()
    cell = ndb.StringProperty()
    email = ndb.StringProperty()
    

