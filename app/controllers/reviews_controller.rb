class ReviewsController < ApplicationController
    skip_before_action :authorized, only: [:index] 

    def index
        render json: Review.all, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        if review.valid?
            render json: review, status: :created
        else
            render json: { error: "Invalid review" }, status: :unprocessable_entity
        end
    end

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :ok
    end

    def destroy 
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:user_id, :review_title, :review_description, :review_rating, :collection_id)
    end
end
