const weaponsData = {
    "Scar": {
        damage: "35",
        fireRate: "5.5",
        magazineSize: "30",
        reloadTime: "2.3s",
        rarity: "Legendary"
    },
    "Pump Shotgun": {
        damage: "110",
        fireRate: "0.7",
        magazineSize: "5",
        reloadTime: "3.0s",
        rarity: "Epic"
    },
    "Bolt-Action Sniper": {
        damage: "105",
        fireRate: "0.33",
        magazineSize: "1",
        reloadTime: "2.5s",
        rarity: "Legendary"
    },
    "Rocket Launcher": {
        damage: "120",
        fireRate: "0.75",
        magazineSize: "1",
        reloadTime: "2.8s",
        rarity: "Epic"
    },
    "P90 SMG": {
        damage: "20",
        fireRate: "11.0",
        magazineSize: "50",
        reloadTime: "3.5s",
        rarity: "Legendary"
    },
    "Tactical Shotgun": {
        damage: "80",
        fireRate: "1.5",
        magazineSize: "8",
        reloadTime: "2.5s",
        rarity: "Rare"
    }
};

function showWeaponInfo(weaponName) {
    document.querySelectorAll('.weapon').forEach(weapon => {
        weapon.style.display = 'none';
    });

    const weapon = weaponsData[weaponName];
    const weaponInfoDiv = document.getElementById('weaponinfo');
    weaponInfoDiv.innerHTML = `
        <h3>${weaponName}</h3>
        <p><strong>Damage:</strong> ${weapon.damage}</p>
        <p><strong>Fire Rate:</strong> ${weapon.fireRate}</p>
        <p><strong>Magazine Size:</strong> ${weapon.magazineSize}</p>
        <p><strong>Reload Time:</strong> ${weapon.reloadTime}</p>
        <p><strong>Rarity:</strong> ${weapon.rarity}</p>
        <button onclick="resetView()">Go Back</button> <!-- Button to reset view -->
    `;
    window.location.hash = `weapon_${Object.keys(weaponsData).indexOf(weaponName) + 1}`;
}

function resetView() {
    document.querySelectorAll('.weapon').forEach(weapon => {
        weapon.style.display = 'flex';
    });

    const weaponInfoDiv = document.getElementById('weaponinfo');
    weaponInfoDiv.innerHTML = `<p>Select a weapon to see details here.</p>`;

    window.location.hash = '';
}
