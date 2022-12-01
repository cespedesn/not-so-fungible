class PurchasedNftsController < ApplicationController
    
    def index
        render json: PurchasedNft.all, status: :ok
    end
    
    def show
        purchased_nft = PurchasedNft.find(params[:id])
        render json: purchased_nft, status: :ok
    end
    def destroy
        
    end
end
