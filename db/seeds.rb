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
demo.profile_banner.attach(io: demo_profile_banner, filname: "demo_banner.jpg")

songdemo1 = Song.create!(title: "High Your Are (Branchez Remix)", description: "Much Vibes", user_id: demo.id, genre: "EDM")
songdemo1_song = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/27+High+You+Are+(Branchez+Remix).mp3")
songdemo1.song.attach(io: songdemo1_song, filename: "high_you_are.mpg")
songdemo1_photo = open("https://soundcheck-seeds.s3-us-west-1.amazonaws.com/high_you_are_art.jpg")
songdemo1.photo.attach(io: songdemo1_photo, filename: "high_you_are_art.jpg")

