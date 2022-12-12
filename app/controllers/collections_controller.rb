class CollectionsController < ApplicationController

  def index
    render json: Collection.all, status: :ok
  end

  def show
    collection = Collection.find(params[:id])
    render json: collection, status: :ok
  end
  
end
