import React, { useEffect, useState } from 'react';
import styles from './Calendar.module.css'

export function Calendar() {
  const [mes, setMes] = useState('');
  const [dias, setDias] = useState([]);
  const [totalDias, setTotalDias] = useState([]);
  
  useEffect(() => {
    const data_atual = new Date();
    const mesAtual = data_atual.getMonth();
    const diaAtual = data_atual.getDate();
    const anoAtual = data_atual.getFullYear();
    const diaSemana = data_atual.getDay();

    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    let dias_fev = 28; // Fevereiro por padrao tem 28 dias
    if (anoAtual % 4 === 0) {
      if ((anoAtual % 100 === 0) && (anoAtual % 400 !== 0)) {
        dias_fev = 28; // ano bissexto, mas multiplo de 100 e nao multiplo de 400
      } else {
        dias_fev = 29; // ano bissexto
      }
    }

    const totalDias = [
      31, dias_fev, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    setMes(meses[mesAtual]);
    setTotalDias(totalDias);

    const diasDoMes = [];
    let primeiroDia = new Date(anoAtual, mesAtual, 1).getDay(); // Dia da semana do primeiro dia do mês
    let diasPreenchidos = 0;

    // Preenche os dias anteriores
    for (let i = 0; i < primeiroDia; i++) {
      diasDoMes.push(null); // Representa os dias vazios antes do primeiro dia
      diasPreenchidos++;
    }

    // Preenche os dias do mês atual
    for (let i = 1; i <= totalDias[mesAtual]; i++) {
      diasDoMes.push(i);
      diasPreenchidos++;
    }

    setDias(diasDoMes);
  }, []);

  const renderCalendario = () => {
    const semanas = [];
    const diasPorSemana = 7;

    for (let i = 0; i < dias.length; i += diasPorSemana) {
      semanas.push(dias.slice(i, i + diasPorSemana));
    }

    return semanas.map((semana, index) => (
      <tr className={styles.numberDayRow} key={index}>
        {semana.map((dia, idx) => (
          <td key={idx} className={dia ? 'dia' : 'vazio'}>
            {dia}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <section className="fundo">
      <div>
        <h1>{mes}</h1>
      </div>
      <table id="tabela_calend">
        <thead>
          <tr className={styles.dayRow}>
            <td><h3>Seg</h3></td>
            <td><h3>Ter</h3></td>
            <td><h3>Qua</h3></td>
            <td><h3>Qui</h3></td>
            <td><h3>Sex</h3></td>
            <td><h3>Sab</h3></td>
            <td><h3>Dom</h3></td>
          </tr>
        </thead>
        <tbody>
          {renderCalendario()}
        </tbody>
      </table>
    </section>
  );
};