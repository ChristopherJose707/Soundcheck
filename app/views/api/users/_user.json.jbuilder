json.extract! user, :id, :username, :display_name, :description
json.trackIds user.songs.ids # trackIds: [1, 2]
    
json.profilePicture url_for(user.profile_picture) if user.profile_picture.attached?
json.profileBanner url_for(user.profile_banner) if user.profile_banner.attached?