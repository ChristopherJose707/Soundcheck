# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Song.destroy_all

# DEMO
demo = User.create!(username: "demoUser", password: "password", display_name: "DemoUser", description: "I'm the demo user!")
demo_profile_picture = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/demo_profile.jpg")
demo.profile_picture.attach(io: demo_profile_picture, filename: "demo_profile.jpg")
demo_profile_banner = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/demo_banner.jpg")
demo.profile_banner.attach(io: demo_profile_banner, filename: "demo_banner.jpg")

songdemo2 = Song.create!(title: "California Dreaming(Remix)", description: "Arman Cekin Remix", user_id: demo.id, genre: "EDM")
songdemo2_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/Arman+Cekin+-+California+Dreaming+(ft.+Paul+Rey).wav")
songdemo2.song.attach(io: songdemo2_song, filename: "Arman+Cekin+-+California+Dreaming+(ft.+Paul+Rey).wav")
songdemo2_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/demo2.jpg")
songdemo2.photo.attach(io: songdemo2_photo, filename: "demo2.jpg")

songdemo3 = Song.create!(title: "Ladi Dadi(Remix)", description: "Tommy Trash Remix", user_id: demo.id, genre: "EDM")
songdemo3_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/Ladi+Dadi+(Feat.+Wynter+Gordon)+(Tom.mp3")
songdemo3.song.attach(io: songdemo3_song, filename: "Ladi+Dadi+(Feat.+Wynter+Gordon)+(Tom.mp3")
songdemo3_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/ladi_dadi_art.jpeg")
songdemo3.photo.attach(io: songdemo3_photo, filename: "ladi_dadi_art.jpeg")

songdemo4 = Song.create!(title: "Lies(Remix)", description: "Otto Knows Remix", user_id: demo.id, genre: "EDM")
songdemo4_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/Lies+(Otto+Knows+Remix).mp3")
songdemo4.song.attach(io: songdemo4_song, filename: "Lies+(Otto+Knows+Remix).mp3")
songdemo4_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/lies_art.jpg")
songdemo4.photo.attach(io: songdemo4_photo, filename: "lies_art.jpg")

#Wave Racer
waveracer = User.create!(username: "WaveRacer", password: "password", display_name: "Wave Racer", description: "The Waviest of Racers")
waveracer_profile_picture = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/wave_racer_profile.jpg")
waveracer.profile_picture.attach(io: waveracer_profile_picture, filename: "wave_racer_profile.jpg")
waveracer_profile_banner = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/wave_racer_banner.jpg")
waveracer.profile_banner.attach(io: waveracer_profile_banner, filename: "wave_racer_banner.jpg")

waveracer_song = Song.create!(title: "Never Be Like You(Remix)", description: "My remix of Flume!", user_id: waveracer.id, genre: "EDM")
waveracer_song_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/03+Never+Be+Like+You+(Wave+Racer+Rem.mp3")
waveracer_song.song.attach(io: waveracer_song_song, filename: "never_be_like_you.mp3")
waveracer_song_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/never+be+like+you.jpg")
waveracer_song.photo.attach(io: waveracer_song_photo, filename: "never+be+like+you.jpg")

#DJ Snake
dj_snake = User.create!(username: "dj_snake", password: "password", display_name: "DJ Snake", description: "Pardon my French")
dj_snake_profile_picture = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/dj_snake_profile.jpeg")
dj_snake.profile_picture.attach(io: dj_snake_profile_picture, filename: "dj_snake_profile.jpeg")
dj_snake_profile_banner = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/dj_snake_banner.jpeg")
dj_snake.profile_banner.attach(io: dj_snake_profile_banner, filename: "dj_snake_banner.jpeg")

dj_snake_song = Song.create!(title: "Let Me Love You", description: "My hit single with Justin", user_id: dj_snake.id, genre: "EDM")
dj_snake_song_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/13+Let+Me+Love+You.mp3")
dj_snake_song.song.attach(io: dj_snake_song_song, filename: "3+Let+Me+Love+You.mp3")
dj_snake_song_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/dj_snake_let_me_love_art.jpg")
dj_snake_song.photo.attach(io: dj_snake_song_photo, filename: "dj_snake_let_me_love_art.jpg")

#WSN
wsn = User.create!(username: "wsn", password: "password", display_name: "What So Not", description: "Down Under")
wsn_profile_picture = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/WSN_profile.jpg")
wsn.profile_picture.attach(io: wsn_profile_picture, filename: "WSN_profile.jpg")
wsn_profile_banner = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/WSN_Banner.jpg")
wsn.profile_banner.attach(io: wsn_profile_banner, filename: "WSN_Banner.jpg")

wsn_song = Song.create!(title: "High Your Are (Branchez Remix)", description: "Much Vibes", user_id: wsn.id, genre: "EDM")
wsn_song_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/27+High+You+Are+(Branchez+Remix).mp3")
wsn_song.song.attach(io: wsn_song_song, filename: "27+High+You+Are+(Branchez+Remix).mp3")
wsn_song_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/high_you_are_art.jpg")
wsn_song.photo.attach(io: wsn_song_photo, filename: "high_you_are_art.jpg")

#Tchami
tchami = User.create!(username: "tchami", password: "password", display_name: "Tchami", description: "Pardon my FRENCH")
tchami_profile_picture = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/tchami_profile.jpeg")
tchami.profile_picture.attach(io: tchami_profile_picture, filename: "tchami_profile.jpeg")
tchami_profile_banner = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/tchami_banner.jpg")
tchami.profile_banner.attach(io: tchami_profile_banner, filename: "tchami_Banner.jpg")

tchami_song = Song.create!(title: "Shot Caller", description: "A Classic", user_id: tchami.id, genre: "EDM")
tchami_song_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/01+Shot+Caller.m4a")
tchami_song.song.attach(io: tchami_song_song, filename: "01+Shot+Caller.m4a")
tchami_song_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/tchami_shot_caller.jpg")
tchami_song.photo.attach(io: tchami_song_photo, filename: "tchami_shot_caller.jpg")

#Nujabes 
nujabes = User.create!(username: "nujabes", password: "password", display_name: "nujabes", description: "Chill stuff")
nujabes_profile_picture = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/nujabes_profile.jpg")
nujabes.profile_picture.attach(io: nujabes_profile_picture, filename: "nujabes_profile.jpg")
nujabes_profile_banner = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/nujabes_banner.jpeg")
nujabes.profile_banner.attach(io: nujabes_profile_banner, filename: "nujabes_banner.jpeg")

nujabes_song = Song.create!(title: "Feather", description: "A Classic", user_id: nujabes.id, genre: "Lo-fi")
nujabes_song_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/01+Feather+(Feat.+Cise+Starr+%26+Akin.mp3")
nujabes_song.song.attach(io: nujabes_song_song, filename: "01+Feather+(Feat.+Cise+Starr+%26+Akin.mp3")
nujabes_song_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/feather.jpg")
nujabes_song.photo.attach(io: nujabes_song_photo, filename: "feather.jpg")

#Drake
drake = User.create!(username: "drake", password: "password", display_name: "Drake", description: "The SIX!")
drake_profile_picture = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/drake_profile.jpg")
drake.profile_picture.attach(io: drake_profile_picture, filename: "drake_profile.jpg")
drake_profile_banner = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/drake_banner.jpg")
drake.profile_banner.attach(io: drake_profile_banner, filename: "drake_banner.jpg")

drake_song = Song.create!(title: "Feel No Ways", description: "Underrated track", user_id: drake.id, genre: "Hip-Hop")
drake_song_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/04+Feel+No+Ways.m4a")
drake_song.song.attach(io: drake_song_song, filename: "04+Feel+No+Ways.m4a")
drake_song_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/drake_feel_no_art.jpg")
drake_song.photo.attach(io: drake_song_photo, filename: "drake_feel_no_art.jpg")