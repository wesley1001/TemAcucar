require 'fileutils'

config = {}
File.open("./.env") do |file|
  file.each_line do |line|
    option = line.split("=")
    config[option[0].to_sym] = option[1].gsub(/\n/, "")
  end
end

puts "Generating Info.plist with injected .env vars..."
file = File.open("./ios/TemAcucar/Info.sample.plist", "rb")
contents = file.read
contents.gsub!("`${CODEPUSH_DEPLOYMENT_KEY}`", config[:CODEPUSH_DEPLOYMENT_KEY_IOS])
contents.gsub!("`${FACEBOOK_APP_ID}`", config[:FACEBOOK_APP_ID])
File.write("./ios/TemAcucar/Info.plist", contents)
