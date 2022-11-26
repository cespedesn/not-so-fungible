class NftsController < ApplicationController
  def index
    render json: Nft.all, status: :ok
  end

  def show
    nft = Nft.find(params[:id])
    render json: nft, status: :ok
  end
end
