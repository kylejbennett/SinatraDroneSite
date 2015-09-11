require 'sinatra'
require 'mandrill'

configure(:development){set :database, "sqlite3:blog.sqlite3"}

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

get "/landing" do
	erb :landing
end

post "/contact" do
	puts "The parameters of the message are " + params.inspect
	m = Mandrill::API.new
	message = {  
	:subject=> params["subject"],  
	:from_name=> params["from"],  
	:text=> params["message"],  
	:to=>[{:email=> "kyle.bennett.development@gmail.com", :name=> params["Stratus Optics"]}],  
	:html=> "",  
	:from_email=> params["emailfrom"]
	} 
	m.messages.send message
	erb :landing
end