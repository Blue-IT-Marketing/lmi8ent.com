import os
import webapp2
import jinja2
from google.appengine.ext import ndb
from google.appengine.api import users
import logging,json,datetime

class Media(ndb.Expando):
    uid = ndb.StringProperty()
    filename = ndb.StringProperty()
    description = ndb.StringProperty()
    art = ndb.StringProperty()
    size = ndb.StringProperty()
    location = ndb.StringProperty()

    def create_id(self, size=64, chars=string.ascii_lowercase + string.digits):
        return ''.join(random.choice(chars) for x in range(size))

class Album(ndb.Expando):
    uid = ndb.StringProperty()
    album_id = ndb.StringProperty()
    album_name = ndb.StringProperty()
    description = ndb.StringProperty()
    genre = ndb.StringProperty()
    playtime = ndb.StringProperty()
    timestamp = ndb.StringProperty()

    def create_id(self, size=64, chars=string.ascii_lowercase + string.digits):
        return ''.join(random.choice(chars) for x in range(size))


    def addAlbum(self,album):

        album_instance = Album()
        album_instance.uid = album['uid']
        album_instance.album_id = self.create_id()
        album_instance.album_name = album['album_name']
        album_instance.description = album['description']
        album_instance.genre = album['genre']
        album_instance.timestamp = datetime.datetime.now()
        album_instance.put()

        return album_instance


    def removeAlbum(self,album_id):

        album_query = Album.query(Album.album_id == album_id)
        album_list = album_query.fetch()

        for album in album_list:
            album.key.delete()

        return album


    def updateAlbum(self,album):
        album_query = Album.query(Album.album_id == album['album_id'])
        album_list = album_query.fetch()

        if(len(album_list) > 0):
            album_file = album_list[0]
            album_file.album_name = album['album_name'] 
            album_file.description = album['description']
            album_file.genre = album['genre']
            album_file.timestamp = datetime.datetime.now()

            return album_file
        else:
            return ''

    def getAlbum(self,album_id):
        album_query = Album.query(Album.album_id == album_id)
        album_list = album_query.fetch()

        if (len(album_list) > 0):
            album_file = album_list[0]
            return album_file
        else:
            return ''

    
    def getAllAlbums(self,uid):
        album_query = Album.query(Album.uid == uid)
        return album_query.fetch()


class Music (Media):    
    mid = ndb.StringProperty()
    album_id = ndb.StringProperty()
    
    def addMusic(self,music):
        
        music_instance = Music()
        music_instance.uid = music['uid']
        music_instance.mid = self.create_id()
        music_instance.filename = music['filename']
        music_instance.description = music['description']
        music_instance.art = music['art']
        music_instance.size = music['size']
        music_instance.location = music['location']

        music_instance.put()



    def removeMusic(self,mid):
        
        music_query = Music.query(Music.mid == mid)
        music_list = music_query.fetch()

        for music in music_list:
            music.key.delete()
        
        return music


    def updateMusic(self,music):

        music_query = Music.query(Music.mid == music['mid'])
        music_list = music_query.fetch()

        if (len(music_list) > 0):
            music_file = music_list[0]
            if (music_file.uid == music['uid']):
                music_file.filename = music['filename']
                music_file.description = music['description']
                music_file.art = music['art']
                music_file.size = music['size']
                music_file.location = music['location']
                music_file.put()

                return music_file
            else:
                return ''
        else:
            return ''
    # get a specifc music file
    def getMusicFile(self,mid):
        
        music_query = Music.query(Music.mid == mid)
        music_list = music_query.fetch()

        if len(music_list) > 0:
            return music_list[0]
        else:
            return ''

    # get all music files
    def getAllMusicFiles(self,uid):

        music_query = Music.query(Music.uid == uid)
        music_list = music_query.fetch()

        return music_list


        

class Videos (Media):
    vid = ndb.StringProperty()

    def addVideo(self,video):
        
        video_instance = Videos()
        video_instance.uid = Video['uid']
        video_instance.vid = self.create_id()
        video_instance.filename = Video['filename']
        video_instance.description = Video['description']
        video_instance.art = Video['art']
        video_instance.size = Video['size']
        video_instance.location = Video['location']
        video_instance.put()


    def removeVideo(self,vid):
        
        video_query = Videos.query(Videos.vid == vid)
        video_list = video_query.fetch()

        for video in video_list:
            video.key.delete()

        return video


    def updateVideo(self,video):
        
        video_query = Videos.query(Videos.vid == video['vid'])
        video_list = video_query.fetch()

        if (len(video_list) > 0):
            video_file = video_list[0]
            video_file.filename = video['filename']
            video_file.description = video['description']
            video_file.art = video['art']
            video_file.size = video['size']
            video_file.put()

            return video_file
        else:
            return ''


    def getVideoFiles(self,vid):
        video_query = Videos.query(Videos.vid == vid)
        video_list = video_query.fetch()

        if (len(video_list) > 0):
            video_file = video_list[0]
            return video_file
        else:
            return ''



    def getAllVideoFiles(self,uid):

        video_query = Videos.query(Video.uid == uid)
        video_list = video_query.fetch()

        return video_list


        


    
