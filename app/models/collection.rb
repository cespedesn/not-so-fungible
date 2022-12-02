class Collection < ApplicationRecord
  has_many :nfts
  has_many :reviews, dependent: :destroy
end
