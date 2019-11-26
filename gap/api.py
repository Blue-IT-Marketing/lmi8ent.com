import os
import webapp2
import jinja2
from google.appengine.ext import ndb
from google.appengine.api import users
import logging,json
from contact import Contact
from media import Album,Music,Videos
class APIRouterHandler(webapp2.RequestHandler):

    def get(self):
        url_route = self.request.uri
        url_routes = url_route.split("/")
        
        status_int = 200
        if 'media' in url_routes:

            uid = url_routes[len(url_routes) - 1]

            if 'albums' in url_routes:
                album_instance = Album()
                album_list = album_instance.getAllAlbums(uid=uid)
                response_data = []

                for album in album_list:
                    response_data.append(album.to_dict())

            elif 'music' in url_routes:
                music_instance = Music()
                music_list = music_instance.getAllMusicFiles(uid=uid)

                response_data = []

                for music in music_list:
                    response_data.append(music.to_dict())



            # TODO - add more endpoints here
            else:
                status_int = 400
                response_data = {'message' : 'there was an error fetching albums'}

        else:
            status_int = 500
            response_data = {'message' : 'request not understood'}

        self.response.headers['Content-Type'] = "application/json"
        self.response.status_int = status_int
        json_data = json.dumps(response_data)
        self.response.write(json_data)




    def post(self):
        url = self.request.uri
        route = url.split('/')
        
        status_int = 200

        if 'contact' in route:
            data = self.request.get('data')
            json_data = json.loads(data)
            logging.info(data)
            Contact.contact_id = ''
            Contact.names = json_data['names']
            Contact.cell = json_data['cell']
            Contact.email = json_data['email']
            Contact.subject = json_data['subject']
            Contact.message = json_data['message']
            Contact.put()

            response_data = Contact.to_dict()


        elif 'media' in route:
            uid = route[len(route) - 1]
            response_data = ''
            if 'album' in route: 
                album_json = json.loads(self.request.body)

                album_instance = Album()
                album = album_instance.addAlbum(album=album_json)

                response_data = album.to_dict()
            else:
                status_int = 500
                response_data = {'message' : 'Error request not understood'}


            
        else:
            status_int = 500
            response_data = {'message' : 'Error request not understood'}

            
        self.response.headers['Content-Type'] = "application/json"
        self.response.status_int = status_int
        json_data = json.dumps(response_data)
        self.response.write(json_data)



app = webapp2.WSGIApplication([
    ('/api/.*', APIRouterHandler)


], debug=True)
