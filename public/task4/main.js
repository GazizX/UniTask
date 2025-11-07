document.getElementById('processBtn').addEventListener('click', function() {
    const showResult = confirm('Показать результаты для всех канав?');
    
    for (let i = 1; i <= 3; i++) {
        const lengthInput = document.getElementById(`length${i}`);
        const typeOfTeamCheckbox = document.getElementById(`typeOfTeam${i}`);
        const resultDiv = document.getElementById(`result${i}`);
        
        const length = parseInt(lengthInput.value);
        const isMechanized = typeOfTeamCheckbox.checked;
        
        const calculateWorkers = new Function('length', 'isMechanized', `
            const metersPerWorker = isMechanized ? 4 : 3;
            return Math.ceil(length / metersPerWorker);
        `);
        
        resultDiv.innerHTML = '';
        resultDiv.className = 'result-placeholder';
        
        if (showResult) {
            if (length && length > 0) {
                const workers = calculateWorkers(length, isMechanized);
                
                resultDiv.className = 'result-placeholder result-success';
                resultDiv.innerHTML = `
                    <h3>Результаты канавы ${i}:</h3>
                    <p><b>Длина:</b> ${length} м</p>
                    <p><b>Бригада:</b> ${isMechanized ? 'Механизированная' : 'Обычная'}</p>
                    <p><b>Землекопов:</b> ${workers} чел.</p>
                    ${!isMechanized 
                        ? '<img src="./assets/землекоп1.png" alt="Обычная бригада" class="result-image">'
                        : '<img src="./assets/землекоп2.png" alt="Механизированная бригада" class="result-image">'
                    }
                `;
            } else {
                resultDiv.className = 'result-placeholder';
                resultDiv.innerHTML = '<p>Не заполнено</p>';
            }
        } else {
            resultDiv.className = 'result-placeholder result-vacation';
            resultDiv.innerHTML = `
                <h3>Канава ${i}</h3>
                <p>Бригада в отпуске</p>
                <img src="./assets/землекоп3.png" alt="Работа приостановлена" class="result-image">
            `;
        }
    }
});