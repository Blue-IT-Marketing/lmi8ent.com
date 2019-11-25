import os
import webapp2
import jinja2
from google.appengine.ext import ndb
from google.appengine.api import users
import logging,json



class Music (ndb.Expando):
    uid = ndb.StringProperty()
    mid = ndb.StringProperty()
    filename = ndb.StringProperty()
    size = ndb.StringProperty()
    location = ndb.StringProperty()

    def create_id(self, size=64, chars=string.ascii_lowercase + string.digits):
        return ''.join(random.choice(chars) for x in range(size))

    

