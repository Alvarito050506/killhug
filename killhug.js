/*
 * killhug.js
 * 
 * Copyright 2019 Alvarito050506 <donfrutosgomez@gmail.com>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function kill()
{
	while (true)
	{
		var pid = "0";
		Object.keys(world.room.players).forEach((id) => {
			if(world.room.players[id]["critterId"] == "huggable")
			{
				pid = id;
			}
		});
		socket.emit("attack", pid);
		socket.emit("click", {
			x: world.room.players[localStorage.getItem("playerId")].x + (Math.ceil(Math.random() * 100) < 50 ? Math.ceil(Math.random() * 50) : 0 - Math.ceil(Math.random() * 50)),
			y: world.room.players[localStorage.getItem("playerId")].y + (Math.ceil(Math.random() * 100) < 50 ? Math.ceil(Math.random() * 50) : 0 - Math.ceil(Math.random() * 50))
		});
		await sleep(1000);
	}
}

kill();
