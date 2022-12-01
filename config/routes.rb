Rails.application.routes.draw do
  resources :reviews
  resources :user_wallets
  resources :purchased_nfts
  resources :nfts
  resources :collections
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  #login in routes
  post '/login', to: 'sessions#create'

  #route to retrieve user's data from database using session hash
  get '/me', to: 'users#show'

  #route for logging out
  delete '/logout', to: 'sessions#destroy'

  get '/login', to: 'users#show'


end
