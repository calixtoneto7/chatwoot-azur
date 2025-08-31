# lib/tasks/tasks.rb

# Só carrega as tarefas se estivermos rodando via rake
if defined?(Rake) || File.basename($PROGRAM_NAME) == 'rake'
  Dir.glob(File.join(File.dirname(__FILE__), 'tasks', '*.rake')).each { |r| load r }
end
