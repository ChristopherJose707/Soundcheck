json.extract! song, :id, :user_id, :title, :genre, :description, :created_at
json.artist song.user.display_name 
json.commentIds song.comments.ids

json.songUrl url_for(song.song) if song.song.attached?
json.songPhoto url_for(song.photo) if song.photo.attached?
