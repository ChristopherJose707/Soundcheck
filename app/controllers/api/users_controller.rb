class Api::UsersController < ApplicationController
  def index 
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = User.find(params[:id])

    if (@user)
        if(@user.update(user_params))
          render json: ["Update successful"], status: 200
        else
          render json: user.errors.full_messages, status: 422
        end
    else
        render json: ["User was not found"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :display_name, :description, :profile_picture, :profile_banner)
  end
end
