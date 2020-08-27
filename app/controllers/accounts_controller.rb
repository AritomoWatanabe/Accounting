class AccountsController < ApplicationController


	def index
		@account = Account.new
		@accounts = Account.all
		# @year = Account.group(:year).pluck(:year).sort
	end

	def search
		@account = Account.new
		@accounts = Account.where('year LIKE ?', "%#{params[:year]}%")
		# @year = Account.group(:year).pluck(:year).sort
		render :index
	end

	def create
		@account = Account.new(account_params)
		@account.save
		redirect_to accounts_path
	end


	private
	def account_params
		params.require(:account).permit(:year, :month, :day, :item, :price)
	end

end
