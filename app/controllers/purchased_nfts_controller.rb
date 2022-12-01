class PurchasedNftsController < ApplicationController
    
    def index
        render json: PurchasedNft.all, status: :ok
    end
    
    def show
        purchased_nft = PurchasedNft.find(params[:id])
        render json: purchased_nft, status: :ok
    end

    def update
        purchased_nft = PurchasedNft.find(params[:id])
        purchased_nft.update!(purchased_nft_params)
    end

    def destroy
        purchased_nft = PurchasedNft.find(params[:id])
        purchased_nfts.destroy
        head :no_content
    end

    private

    def purchased_nft_params
        params.permit(:user_id, :user_wallet_id, :nft_name, :nft_description, :nft_image)
    end
end
