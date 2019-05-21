require 'sinatra'
configure { set :server, :puma}
require 'pry'

class FindMyFriends < Sinatra::Application
  @@database = {}

  get '/' do
    "#{@@database}"
  end

  post '/' do
    params = JSON.parse(request.body.read)
    @@database[params['name']] = { 'lat': params['lat'], 'lng': params['lng'] }
    {status: 'Okay'}.to_json
  end
end
