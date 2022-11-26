class UserWalletsController < ApplicationController
    def index
        render json: UserWallet.all, status: :ok
    end

    def show
        user_wallet = UserWallet.find(params[:id])
        render json: user_wallet, status: :ok
    end
    
end
