class Api::LikesController < ApplicationController
  def index 
    @likes = Like.all
    render :index
  end
  
  def create
    @like = Like.new(like_params)
    if @like.save!
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find_by(id: params[:id])
    if @like 
      @like.destroy
    end
  end

  private 
  
  def like_params 
    params.require(:like).permit(:user_id, :song_id)
  end
end
