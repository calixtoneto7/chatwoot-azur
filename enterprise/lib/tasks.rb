# enterprise/lib/tasks.rb
# Carrega as .rake **somente** quando a app está sendo executada via Rake
# (evita "undefined method `namespace' for main" em processos que não usam Rake)
if defined?(Rake) || File.basename($PROGRAM_NAME) == 'rake'
  Dir.glob(File.join(__dir__, 'tasks', '*.rake')).each { |r| load r }
end
