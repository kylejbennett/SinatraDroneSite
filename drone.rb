require 'sinatra'
require 'mandrill'

get "/" do
	erb :home
end

get "/about" do
	erb :about
end

get "/contact" do
	erb :contact
end

get "/services" do
	erb :services
end