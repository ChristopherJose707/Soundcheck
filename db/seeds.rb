# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(id: 1, username: "demoUser", password: "password", 
        display_name: "DemoUser", description: "I'm the demo user!")

Song.destroy_all

songdemo = Song.create!(title: "Levels", description: "Untz untz", user_id: 1, genre: "EDM")