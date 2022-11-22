class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized

    def authorized
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

private

    def render_not_found(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end

    def render_invalid(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    
end
