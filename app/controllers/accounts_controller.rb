class AccountsController < ApplicationController


	def index
		@account = Account.new
		@accounts = Account.all
	end

	def create
		@account = Account.new(account_params)
		@account.save
	end


	private
	def account_params
		params.require(:account).permit(:year, :month, :day, :item, :price)
	end

end
