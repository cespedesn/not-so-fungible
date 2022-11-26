class NftSerializer < ActiveModel::Serializer
  attributes :id, :nft_name, :nft_price, :nft_description, :nft_image

end
