class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorized

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

   

# current_user and authorized
    # def current_user
    #     user = User.find_by(id: session[:user_id])
    # end


    def authorized
        return render json: { error: "Not authorized" }, status: :unauthorized unless  session.include? :user_id
    end

private

    def render_not_found(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end

    def render_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    
end
