class Api::SongsController < ApplicationController
    def index 
        @songs = Song.all 
        render :index 
    end

    def show 
        @song = Song.find_by(id: params[:id])
    end

    def create
        @song = Song.new(song_params)
        if @song.save! 
            render :show 
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    def update
        @song = Song.find_by(id: params[:id])

        if @song.user_id === current_user.id && @song.update(song_params)
            render :show
        end
    end

    def destroy
        @song = current_user.songs.find_by(id: params[:id])

        if @song 
            @song.destroy
        end
    end

    private 

    def song_params 
        params.require(:song).permit(:title, :description, :user_id, :genre, :song, :photo)
    end
end
