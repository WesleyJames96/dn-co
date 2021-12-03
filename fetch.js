fetch("buildings.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        // Data for London Street

        ldn = data[0].name;
        ldnType = data[0].type;
        ldnStatus = data[0].status;
        ldnGross = data[0].grossArea;

        document.getElementById('ldn').innerHTML = ldn;
        document.getElementById('ldnType').innerHTML = ldnType;
        document.getElementById('ldnStatus').innerHTML = ldnStatus;
        document.getElementById('ldnGross').innerHTML = ldnGross;

        // Data for Cornahll street

        cornhall = data[1].name;
        cornhallType = data[1].type;
        cornhallStatus = data[1].status;
        cornhallGross = data[1].grossArea;

        document.getElementById('cornhall').innerHTML = cornhall;
        document.getElementById('cornhallType').innerHTML = cornhallType;
        document.getElementById('cornhallStatus').innerHTML = cornhallStatus;
        document.getElementById('cornhallGross').innerHTML = cornhallGross;

        // Data for Cannon Street

        cannon = data[2].name;
        cannonType = data[2].type;
        cannonStatus = data[2].status;
        cannonGross = data[2].grossArea;

        document.getElementById('cannon').innerHTML = cannon;
        document.getElementById('cannonType').innerHTML = cannonType;
        document.getElementById('cannonStatus').innerHTML = cannonStatus;
        document.getElementById('cannonGross').innerHTML = cannonGross;

        // Data for Plaza

        plaza = data[3].name;
        plazaType = data[3].type;
        plazaStatus = data[3].status;
        plazaGross = data[3].grossArea;

        document.getElementById('plaza').innerHTML = plaza;
        document.getElementById('plazaType').innerHTML = plazaType;
        document.getElementById('plazaStatus').innerHTML = plazaStatus;
        document.getElementById('plazaGross').innerHTML = plazaGross;

        // Data for Gold Street
        
        gold = data[4].name;
        goldType = data[4].type;
        goldStatus = data[4].status;
        goldGross = data[4].grossArea;

        document.getElementById('gold').innerHTML = gold;
        document.getElementById('goldType').innerHTML = goldType;
        document.getElementById('goldStatus').innerHTML = goldStatus;
        document.getElementById('goldGross').innerHTML = goldGross;




        floorsRemaining = data[0].floors;
        console.log(floorsRemaining);
        availableSpace = floorsRemaining[0].availableSpace;
        console.log(availableSpace);

        document.getElementById('space').innerHTML = availableSpace;
    })
