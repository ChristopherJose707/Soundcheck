class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save! 
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find_by(id: params[:id])
        if @comment
            @comment.destroy
        end
    end

    private 

    def comment_params
        params.require(:comment).permit(:author_id, :song_id, :body, :parent_id)
    end
end
