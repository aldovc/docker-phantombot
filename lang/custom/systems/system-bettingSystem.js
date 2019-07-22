$.lang.register('bettingsystem.open.usage', 'Uso: !bet open ["titulo"] ["opcion1, opcion2, etc."] [apuesta mínima] [apuesta máxima] [minutos antes de cerrarla] - Las comillas dobles son necesarias en las opciones.');
$.lang.register('bettingsystem.open.error', 'Debes seleccionar una opción ganadora a la apuesta previa antes de abrir una nueva. !bet close [opción]');
$.lang.register('bettingsystem.open.error.opened', 'Existe una apuesta en curso.');
$.lang.register('bettingsystem.open.success', 'Se abre la apuesta! "$1". Las opciones son: "$2". Apuesta con: !bet [cantidad] [opción]');
$.lang.register('bettingsystem.close.error.usage', 'Se cierra la apuesta! Esperamos la opción ganadora. !bet close [opción ganadora]');
$.lang.register('bettingsystem.close.usage', 'Uso: !bet close [opción ganadora]');
$.lang.register('bettingsystem.close.success', 'La apuesta se cierra! La opción ganadora es $1! Calculando resultados y dando premio a los ganadores!');
$.lang.register('bettingsystem.close.semi.success', 'La apuesta está cerrada! Esperamos por la opción ganadora.');
$.lang.register('bettingsystem.close.success.winners', 'En total $1 ganaron esta apuesta! Un total de $2 por los que apostaron por $3!');
$.lang.register('bettingsystem.save.format', 'Título: "$1", Opciones: "$2", Cantidad apostada: $3, Entradas totales: $4, Cantidad ganada: $5.');
$.lang.register('bettingsystem.results', 'Apuesta actual: Título: "$1", Opciones: "$2", Cantidad: $3, Entradas Totales: $4');
$.lang.register('bettingsystem.global.usage', 'Uso: !bet [open / close / save / saveformat / lookup / results / togglemessages / gain]');
$.lang.register('bettingsystem.bet.usage', 'Uso: !bet [cantidad] [opción]');
$.lang.register('bettingsystem.bet.error.neg', 'No puedes apostar $1 negativos!');
$.lang.register('bettingsystem.bet.error.min', 'Lo mínimo que puedes apostar es $1.');
$.lang.register('bettingsystem.bet.error.max', 'Lo máximo que puedes apostar es $1.');
$.lang.register('bettingsystem.bet.error.points', 'No tienes suficientes $1 para apostar esa cantidad.');
$.lang.register('bettingsystem.bet.betplaced', 'Ya pusiste tu apuesta $1 a $2.');
$.lang.register('bettingsystem.bet.null', 'Esa no es una opción válida.');
$.lang.register('bettingsystem.toggle.save', 'Betting results will $1 be saved after closing a bet.');
$.lang.register('bettingsystem.warning.messages', 'Warning messages will $1 be diplayed in chat.');
$.lang.register('bettingsystem.saveformat.usage', 'Usage: !bet saveformat [date format] - Default is yy.M.dd');
$.lang.register('bettingsystem.saveformat.set', 'Save format has been changed to $1.');
$.lang.register('bettingsystem.gain.usage', 'Usage: !bet gain [percent]');
$.lang.register('bettingsystem.gain.set', 'Gain percent has been set to $1%');
$.lang.register('bettingsystem.lookup.usage', 'Usage: !bet lookup [$1] - use _# after the date if you made multiple bets that day.');
$.lang.register('bettingsystem.lookup.show', 'Bet from [$1] $2');
$.lang.register('bettingsystem.lookup.null', 'No hubo apuestas ese día.');
$.lang.register('bettingsystem.now', 'now');
$.lang.register('bettingsystem.not', 'not');
