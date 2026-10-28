import readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

import MeuArray from './MeuArray.js';
import Pilha from './Pilha.js';
import Fila from './Fila.js';
import LinkedList from './LinkedList.js';
import DoublyLinkedList from './DoublyLinkedList.js';
import BinaryTree from './BinaryTree.js';
import AVLTree from './AVLTree.js';

// Configuração
const TAMANHO = 10_000_000;

const VALOR_BUSCADO = 9986;

const NOME_BUSCADO = 'Joaquim';

const RODADAS = 10;

const ESTRUTURAS = [
    { nome: 'MeuArray', criar: () => new MeuArray() },
    { nome: 'Pilha', criar: () => new Pilha() },
    { nome: 'Fila', criar: () => new Fila() },
    { nome: 'LinkedList', criar: () => new LinkedList() },
    { nome: 'DoublyLinkedList', criar: () => new DoublyLinkedList() },
    { nome: 'BinaryTree', criar: () => new BinaryTree() },
    { nome: 'AVLTree', criar: () => new AVLTree() },
];

// Apoio

const rl = readline.createInterface({ input: stdin, output: stdout });

let rlFechado = false;


const linhasPendentes = [];
const aguardando = [];

rl.on('line', (linha) => {
    const resolver = aguardando.shift();

    if (resolver) {
        resolver(linha);
    } else {
        linhasPendentes.push(linha);
    }
});

rl.on('close', () => {
    rlFechado = true;

    while (aguardando.length > 0) {
        aguardando.shift()('');
    }
});

function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ms(valor) {
    return valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

function esperarEnter(mensagem) {
    if (rlFechado && linhasPendentes.length === 0) {
        return Promise.resolve();
    }

    stdout.write(mensagem);

    if (linhasPendentes.length > 0) {
        linhasPendentes.shift();
        return Promise.resolve();
    }

    return new Promise((resolve) => {
        aguardando.push(resolve);
    });
}

function linha(tamanho = 78) {
    console.log('-'.repeat(tamanho));
}

function mostrarTeste(indice, insercao, busca, encontrado, encontradoNome) {
    const t = `T${indice}`.padStart(4, ' ');
    const ins = ms(insercao).padStart(14, ' ');
    const bus = ms(busca).padStart(10, ' ');

    console.log(`  ${t} | inserção: ${ins} ms | busca ${VALOR_BUSCADO}+${NOME_BUSCADO}: ${bus} ms | encontrados: ${encontrado}/${encontradoNome}`);
}


function mostrarResumo(nome, testes) {
    const insercoes = testes.map((t) => t.insercao);
    const buscas = testes.map((t) => t.busca);

    const minimo = (valores) => Math.min(...valores);
    const maximo = (valores) => Math.max(...valores);
    const media = (valores) => valores.reduce((soma, v) => soma + v, 0) / valores.length;

    console.log('');
    linha();
    console.log(`  RESULTADOS - ${nome}`);
    linha();
    console.log(`  Teste | Inserção (ms) | Busca ${VALOR_BUSCADO}+${NOME_BUSCADO} (ms) | Encontrados`);
    linha();

    for (const teste of testes) {
        const t = `T${teste.indice}`.padStart(6, ' ');
        const ins = ms(teste.insercao).padStart(13, ' ');
        const bus = ms(teste.busca).padStart(22, ' ');

        console.log(`  ${t} | ${ins} | ${bus} | ${teste.encontrado}/${teste.encontradoNome}`);
    }

    linha();
    console.log(`  Inserção | mín: ${ms(minimo(insercoes))} ms | média: ${ms(media(insercoes))} ms | máx: ${ms(maximo(insercoes))} ms`);
    console.log(`  Busca    | mín: ${ms(minimo(buscas))} ms | média: ${ms(media(buscas))} ms | máx: ${ms(maximo(buscas))} ms`);
    linha();
    console.log('');
}

//Execução

console.log('========================================================================');
console.log('BENCHMARK DAS ESTRUTURAS DE DADOS');
console.log('========================================================================');
console.log(`Tamanho por teste: ${TAMANHO.toLocaleString('pt-BR')} elementos`);
console.log(`Testes por estrutura: ${RODADAS}`);
console.log(`Valor buscado: ${VALOR_BUSCADO.toLocaleString('pt-BR')} | Nome buscado: ${NOME_BUSCADO}`);
console.log(`Estruturas: ${ESTRUTURAS.map((e) => e.nome).join(' -> ')}`);
console.log(`Valores inseridos: aleatórios entre i e o tamanho; ${VALOR_BUSCADO} e depois`);
console.log(`                     "${NOME_BUSCADO}" (último) entram nas duas últimas iterações.`);
console.log('========================================================================');

for (let indice = 0; indice < ESTRUTURAS.length; indice++) {
    const { nome, criar } = ESTRUTURAS[indice];
    const proxima = ESTRUTURAS[indice + 1];

    console.log('');
    console.log('========================================================================');
    console.log(`  ESTRUTURA ${indice + 1}/${ESTRUTURAS.length}: ${nome}`);
    console.log('========================================================================');
    console.log('');

    const testes = [];
    let estrutura = null;

    for (let rodada = 1; rodada <= RODADAS; rodada++) {
        
        estrutura = criar();

        console.log(`  Executando T${rodada}/${RODADAS}...`);

        // Inserção
        const inicioInsercao = performance.now();

        for (let i = 0; i < TAMANHO; i++) {
            if (i === TAMANHO - 1) {
                estrutura.insert(NOME_BUSCADO);
            } else if (i === TAMANHO - 2) {
                estrutura.insert(VALOR_BUSCADO);
            } else {
                estrutura.insert(getRandomIntRange(i, TAMANHO));
            }
        }

        const tempoInsercao = performance.now() - inicioInsercao;

        // Busca
        const inicioBusca = performance.now();
        const encontrado = estrutura.search(VALOR_BUSCADO);
        const encontradoNome = estrutura.search(NOME_BUSCADO);
        const tempoBusca = performance.now() - inicioBusca;

        testes.push({ indice: rodada, insercao: tempoInsercao, busca: tempoBusca, encontrado, encontradoNome });
        mostrarTeste(rodada, tempoInsercao, tempoBusca, encontrado, encontradoNome);

        estrutura = null;
        globalThis.gc?.();
    }

    mostrarResumo(nome, testes);

    if (proxima) {
        await esperarEnter(`  Anote os valores de ${nome} e pressione ENTER para limpar e ir para ${proxima.nome}... `);
    } else {
        await esperarEnter('  Anote os valores de ' + nome + ' e pressione ENTER para finalizar... ');
    }

    console.log('');
    estrutura = null;
    globalThis.gc?.();
}

rl.close();

console.log('');
console.log('========================================================================');
console.log('Benchmark finalizado.');
console.log('========================================================================');
