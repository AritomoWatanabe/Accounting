Rails.application.routes.draw do

  get 'search' => 'accounts#search'
  resources :accounts, only:[:index, :create, :destroy]

  resources :construction_sites, only:[:new, :create]

end
