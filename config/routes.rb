Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :widgets, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    resources :widgets, only: [:create, :destroy]
  end
end
