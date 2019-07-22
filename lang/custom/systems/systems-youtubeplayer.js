$.lang.register('ytplayer.client.404', 'El player de YouTube no está conectado!');
$.lang.register('ytplayer.playlist.404', 'No se encuentra la playlist [$1]');
$.lang.register('ytplayer.announce.nextsong', '[\u266B] Ahora suena [$1] Pedida por: $2');
$.lang.register('ytplayer.console.client.connected', '[\u266B] YouTube Player is connected! [\u266B]');
$.lang.register('ytplayer.console.client.disconnected', '[\u266B] YouTube Player is disconnected! [\u266B]');
$.lang.register('ytplayer.songrequests.enabled', '[\u266B] Pídela cantando! Iniciamos con las peticiones! [\u266B]');
$.lang.register('ytplayer.songrequests.disabled', '[\u266B] Se terminan las peticiones musicales! [\u266B]');
$.lang.register('ytplayer.command.volume.get', 'El volumen del player es de: $1');
$.lang.register('ytplayer.command.volume.set', 'Set YouTube Player Volume: $1');
$.lang.register('ytplayer.command.ytp.togglestealrefund.enable', 'YouTube Player stolen songs will be refunded to users.');
$.lang.register('ytplayer.command.ytp.togglestealrefund.disable', 'YouTube Player stolen songs will NOT be refunded to users.');
$.lang.register('ytplayer.command.ytp.togglerandom.toggled', 'YouTube Player Playlist Randomization has been $1');
$.lang.register('ytplayer.command.ytp.toggleannounce.toggled', 'YouTube Player Announcements have been $1');
$.lang.register('ytplayer.command.ytp.setrequestmax.usage', 'usage: !ytp setrequestmax [max requests]');
$.lang.register('ytplayer.command.ytp.setrequestmax.success', 'Maximum concurrent song requests set to $1');
$.lang.register('ytplayer.command.ytp.setmaxvidlength.usage', 'usage: !ytp setmaxvidlength [seconds]');
$.lang.register('ytplayer.command.ytp.setmaxvidlength.success', 'Maximum song request length set to $1 seconds.');
$.lang.register('ytplayer.command.ytp.setdjname.usage', 'usage: !ytp setdjname [name]');
$.lang.register('ytplayer.command.ytp.setdjname.success', 'Changed DJ name to $1');
$.lang.register('ytplayer.command.playlist.usage', 'usage: !playlist [add | delete | loadpl | deletepl | listpl | importpl]');
$.lang.register('ytplayer.command.playlist.add.failed', 'Failed to add song to playlist: $1');
$.lang.register('ytplayer.command.playlist.add.usage', 'usage: !ytp playlist add [youtube link]');
$.lang.register('ytplayer.command.playlist.add.success', 'Success adding [$1] to playlist [$2]');
$.lang.register('ytplayer.command.playlist.load.success.new', 'Loaded empty playlist [$1]');
$.lang.register('ytplayer.command.playlist.load.success', 'Loaded playlist [$1]');
$.lang.register('ytplayer.command.playlist.load.usage', 'usage: !playlist loadpl [playlist name]');
$.lang.register('ytplayer.command.playlist.delete.isdefault', 'Cannot delete default playlist!');
$.lang.register('ytplayer.command.playlist.delete.success', 'Deleted playlist [$1]');
$.lang.register('ytplayer.command.playlist.delete.404', 'Playlist [$1] does not exist!');
$.lang.register('ytplayer.command.playlist.delete.usage', 'uso: !playlist deletepl [playlist name]');
$.lang.register('ytplayer.command.playlist.listpl', 'Playlists: $1');
$.lang.register('ytplayer.command.stealsong.this.success', '$1 copied the current song to the playlist.');
$.lang.register('ytplayer.command.stealsong.other.success', '$1 copied the current song to the [$2] playlist.');
$.lang.register('ytplayer.command.stealsong.refund', '$1 recibió un reembolso de $2 $3 por su petición!');
$.lang.register('ytplayer.command.stealsong.duplicate', 'Ya tengo esa canción en la playlist!');
$.lang.register('ytplayer.command.jumptosong.failed', 'Cannot find song at position $1 in playlist.');
$.lang.register('ytplayer.command.songrequest.usage', 'uso: !songrequest [YouTube ID | YouTube link | palabra clave]');
$.lang.register('ytplayer.command.songrequest.success', 'Tu canción "$1" se agregó a la cola (Posición: $2 ID: $3)');
$.lang.register('ytplayer.command.songrequest.failed', 'No pude agregar la canción: $1');
$.lang.register('ytplayer.command.previoussong', 'La canción anterior fue [$1] a petición de $2 de $3');
$.lang.register('ytplayer.command.previoussong.404', 'No hubo canción previa.');
$.lang.register('ytplayer.command.currentsong', 'La canción actual [$1] fue pedida por $2 de $3');
$.lang.register('ytplayer.command.currentsong.404', 'No hay canción actual');
$.lang.register('ytplayer.command.delrequest.success', 'Removed song with ID [$1] and title of [$2] from song requests.');
$.lang.register('ytplayer.command.delrequest.404', 'Song requests do not have a song with an ID of [$1]');
$.lang.register('ytplayer.command.delrequest.usage', 'uso: !ytp delrequest [YouTube ID]');
$.lang.register('ytplayer.command.ytp.usage', 'usage: !ytp [togglesongrequest | toggleanounce | delrequest | volume | togglerandom | setrequestmax | setmaxvidlength | votecount]');
$.lang.register('ytplayer.command.wrongsong.success', 'La última petición de canción se eliminó: [$1]');
$.lang.register('ytplayer.command.wrongsong.404', 'No se encontraron rolas');
$.lang.register('ytplayer.command.wrongsong.user.success', 'Se eliminó la canción más reciente de $1: [$2]');
$.lang.register('ytplayer.command.wrongsong.usage', 'uso: !wrongsong [user] [username]. Sin [user] borra tu última petición.');
$.lang.register('ytplayer.command.nextsong.single', 'Siguiente canción: $1');
$.lang.register('ytplayer.command.nextsong.amount', 'Siguientes $1 Canciones: $2');
$.lang.register('ytplayer.command.nextsong.range', 'Canciones en Rango: $1');
$.lang.register('ytplayer.command.nextsong.usage', 'uso: !nextsong [index number | next [n] | list [x-y]. Muesta la siguiente canción o título en el número de índice o siguientes n canciones o un rango con x-y');
$.lang.register('ytplayer.command.nextsong.404', 'La cola de peticiones está vacía.');
$.lang.register('ytplayer.command.nextsong.range.404', 'No se encontraron canciones en ese rango.');
$.lang.register('ytplayer.requestsong.error.maxrequests', 'excede el máximo número de peticiones al mismo tiempo');
$.lang.register('ytplayer.requestsong.error.disabled', 'las peticiones de rolas están deshabilitadas');
$.lang.register('ytplayer.requestsong.error.yterror', 'YouTube error ($1)');
$.lang.register('ytplayer.requestsong.error.exists', 'la canción ya está en la cola');
$.lang.register('ytplayer.requestsong.error.maxlength', 'la duración de la canción es de $1 y excede el máximo');
$.lang.register('ytplayer.command.importpl.file.start', 'Import has started, please wait...');
$.lang.register('ytplayer.command.importpl.file.success', 'Import Complete! Successfully imported $1 songs and failed to import $2 songs from $3 to playlist $4');
$.lang.register('ytplayer.command.importpl.file.success.plerror', 'Import Complete! Successfully imported $1 songs and failed to import $2 songs from $3 to playlist $4. Skipped $5 playlist(s).');
$.lang.register('ytplayer.command.importpl.file.404', 'Could not find file $1');
$.lang.register('ytplayer.command.importpl.file.registry404', 'List $1 was not created in DB, try again.');
$.lang.register('ytplayer.command.importpl.file.usage', 'usage: !playlist importpl file [playlist name] [filename]');
$.lang.register('ytplayer.blacklisted', 'no puedes usar songrequest.');
$.lang.register('ytplayer.blacklist.usage', 'uso: !ytp blacklistuser [add / remove]');
$.lang.register('ytplayer.blacklist.add.usage', 'uso: !ytp blacklistuser add [username]');
$.lang.register('ytplayer.blacklist.add.success', '$1 ha sido puesto en la lista negra de songrequests (ya no puede pedir rolas).');
$.lang.register('ytplayer.blacklist.remove.usage', 'uso: !ytp blacklistuser remove [username]');
$.lang.register('ytplayer.blacklist.remove.success', '$1 ha sido quitado de la lista negra de songrequests (ya puede pedir rolas de nuevo).');
$.lang.register('ytplayer.blacklist.usage.song', 'usage: !ytp blacklist [add / remove]');
$.lang.register('ytplayer.blacklist.add.usage.song', 'usage: !ytp blacklist add [name/keyword]');
$.lang.register('ytplayer.blacklist.add.success.song', 'Song/Keyword: "$1" has been added to the blacklist.');
$.lang.register('ytplayer.blacklist.remove.usage.song', 'usage: !ytp blacklist remove [name]');
$.lang.register('ytplayer.blacklist.remove.success.song', 'Song/Keyword: "$1" has been removed from the blacklist.');
$.lang.register('ytplayer.blacklist.404', 'Esa canción está en la lista negra.');
$.lang.register('ytplayer.command.skip.success', 'Nos vamos a brincar esa canción con $1 votos más.');
$.lang.register('ytplayer.command.skip.disabled', 'Ahora mismo no se puede votar.');
$.lang.register('ytplayer.command.skip.failure', 'Ya pediste que nos brinquemos esa canción.');
$.lang.register('ytplayer.command.skip.skipping', 'Los votos se contaron y todos han hablado! Nos brincamos esa rola!');
$.lang.register('ytplayer.command.votecount.set', 'Votos mínimos necesarios para brincar la canción: $1');
$.lang.register('ytplayer.command.votecount.negative', 'El número de votos requerido debe ser positivo!');
$.lang.register('ytplayer.command.votecount.usage', '!ytp votecount [amount]  ---  Current setting: $1');
