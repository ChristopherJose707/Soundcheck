Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :index] do
      resources :songs, only: [:index]
      resources :likes, only: [:index]
    end
    resources :songs, only: [:index, :create, :update, :destroy, :show]
    resources :comments, only: [:create, :destroy, :index]
    resources :likes, only: [:create, :destroy]
    
    resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
