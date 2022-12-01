class NftsController < ApplicationController
  def index
    render json: Nft.all, status: :ok
  end

  def show
    nft = Nft.find(params[:id])
    render json: nft, status: :ok
  end

  def create
    nft = Nft.create!(nft_params)
    render json: nft, status: :created
  end

  private 

  def nft_params
    params.permit(:nft_name, :nft_description, :nft_image)
  end
end
