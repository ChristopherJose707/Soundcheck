json.extract! user, :id, :username, :display_name, :description
json.profilePicture url_for(user.profile_picture) if user.profile_picture.attached?
json.profileBanner url_for(user.profile_banner) if user.profile_banner.attached?