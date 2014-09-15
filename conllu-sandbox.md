---
layout: entry
title:  'Sandbox'
---

# CoNLL-U sandbox

This file is intended as a "sandbox" for testing the CoNLL-U format
support (see [format](format.html)).

## Valid examples:

### Multiword token ("haven't")

<div class="conllu-parse" tabs="yes">
1	I	I	PRON	PRN	Num=Sing|Per=1	2	nsubj	_	_
2-3	haven't	_	_	_	_	_	_	_	_
2	have	have	VERB	VB	Tens=Pres	0	root	_	_
3	not	not	ADV	RB	_	2	neg	_	_
4	a	a	DET	DT	_	5	det	_	_
5	clue	clue	NOUN	NN	Num=Sing	2	dobj	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

</div>

### Additional dependencies (DEPS field)

<div class="conllu-parse" tabs="yes">
1	They	they	PRON	PRN	Case=Nom|Num=Plur	2	nsubj	4:nsubj	_
2	buy	buy	VERB	VBP	Num=Plur|Per=3|Tense=Pres	0	root	_	_
3	and	and	CONJ	CC	_	2	cc	_	_
4	sell	sell	VERB	VBP	Num=Plur|Per=3|Tense=Pres	2	conj	_	_
5	books	book	NOUN	NNS	Num=Plur	2	dobj	4:dobj	_
6	.	.	PUNCT	.	_	2	punct	_	_

</div>

## Acceptable examples with loose parsing

Otherwise valid, but two spaces instead of single tab as field
separator and no terminal newline:

<div class="conllu-parse" tabs="yes">
1  I  I  PRON  PRN  Num=Sing|Per=1  2  nsubj  _  _
2-3  haven't  _  _  _  _  _  _  _  _
2  have  have  VERB  VB  Tens=Pres  0  root  _  _
3  not  not  ADV  RB  _  2  neg  _  _
4  a  a  DET  DT  _  5  det  _  _
5  clue  clue  NOUN  NN  Num=Sing  2  dobj  _  _
6  .  .  PUNCT  .  _  2  punct  _  _
</div>

## Non-valid examples:

Non-valid examples from "tools" test cases

### ambiguous-feature.conll

<div class="conllu-parse" tabs="yes">
# not valid: feature definition is malformed / ambiguous (two "=" characters)
1	non-valid	non-valid	NOUN	SP	A=B=C	0	ROOT	_	_

</div>

### duplicate-feature.conll

<div class="conllu-parse" tabs="yes">
# not valid: feature name occurs twice
1	non-valid	non-valid	NOUN	SP	Gen=M|Gen=M	0	ROOT	_	_

</div>

### duplicate-id.conll

<div class="conllu-parse" tabs="yes">
# not valid: IDs must be sequential integers (1, 2, ...)
1	valid	valid	NOUN	SP	_	0	ROOT	_	_
1	.	.	.	FS	_	1	p	_	_

</div>

### duplicate-value.conll

<div class="conllu-parse" tabs="yes">
# not valid: feature value occurs twice
1	non-valid	non-valid	NOUN	SP	Gen=M,M	0	ROOT	_	_

</div>

### empty-head.conll

<div class="conllu-parse" tabs="yes">
# not valid: HEAD must not be empty
1	have	have	VERB	VB	Tens=Pres		root	_	_

</div>

### empty-field.conll

<div class="conllu-parse" tabs="yes">
# not valid: no field can be empty.
1		valid	NOUN	SP	_	0	ROOT	_	_

</div>

### empty-sentence.conll

<div class="conllu-parse" tabs="yes">
# not valid: sentences must contain at least one word.

# valid one-word sentence.
1	valid	valid	NOUN	SP	_	0	ROOT	_	_

</div>

### extra-empty-line.conll

<div class="conllu-parse" tabs="yes">
# valid one-word sentence.
1	valid	valid	NOUN	SP	_	0	ROOT	_	_


# format error: sentences must be separated by exactly one empty line
# valid one-word sentence.
1	valid	valid	NOUN	SP	_	0	ROOT	_	_

</div>

### extra-field.conll

<div class="conllu-parse" tabs="yes">
# not valid: 11 TAB-separated fields
1	non-valid	non-valid	NOUN	SP	_	0	ROOT	_	_	extra

</div>

### id-starting-from-2.conll

<div class="conllu-parse" tabs="yes">
# valid one-word sentence.
1	valid	valid	NOUN	SP	_	0	ROOT	_	_

# not valid: ID must start at 1 for each new sentence
2	valid	valid	NOUN	SP	_	0	ROOT	_	_

</div>

### lowercase-feature.conll

<div class="conllu-parse" tabs="yes">
# not valid: feature names must have format '[A-Z0-9][a-zA-Z0-9]*'
# (see http://universaldependencies.github.io/docs/features.html)
1	non-valid	non-valid	NOUN	SP	lower=Nonvalid	0	ROOT	_	_

</div>

### lowercase-value.conll

<div class="conllu-parse" tabs="yes">
# not valid: feature values must have format '[A-Z0-9][a-zA-Z0-9]*'
# (see http://universaldependencies.github.io/docs/features.html)
1	non-valid	non-valid	NOUN	SP	Lower=nonvalid	0	ROOT	_	_

</div>

### malformed_deps.conll

<div class="conllu-parse" tabs="yes">
# This is a comment
1	Gas	gas	NOUN	S	gen=m|num=n	0	ROOT	xxx	_

</div>

### misordered-feature.conll

<div class="conllu-parse" tabs="yes">
# not valid: features must be ordered alphabetically (ignoring case)
# (see http://universaldependencies.github.io/docs/features.html)
1	non-valid	non-valid	NOUN	SP	XB=True|Xa=True	0	ROOT	_	_

</div>

### multiword-with-pos.conll

<div class="conllu-parse" tabs="yes">
# not valid: multiword tokens must have underscore ("_") for all fields
# except FORM.
1	I	I	PRON	PRN	Num=Sing|Per=1	2	nsubj	_	_
2-3	haven't	_	VERB	_	_	_	_	_	_
2	have	have	VERB	VB	Tens=Pres	0	root	_	_
3	not	not	ADV	RB	_	2	neg	_	_
4	a	a	DET	DT	_	5	det	_	_
5	clue	clue	NOUN	NN	Num=Sing	2	dobj	_	_
6	.	.	PUNCT	.	_	2	punct	_	_

</div>

### nonsequential-id.conll

<div class="conllu-parse" tabs="yes">
# not valid: IDs must be sequential integers (1, 2, ...)
1	valid	valid	NOUN	SP	_	0	ROOT	_	_
3	.	.	.	FS	_	1	p	_	_

</div>

### space-in-field.conll

<div class="conllu-parse" tabs="yes">
# not valid: no field can contain space.
1	not valid	valid	NOUN	SP	_	0	ROOT	_	_

</div>

### token_with_cols_filled.conll

<div class="conllu-parse" tabs="yes">
1	LONDRA	Londra	NOUN	SP	_	0	ROOT	_	_
2	.	.	.	FS	_	1	p	_	_

# This is a comment
1	Gas	gas	NOUN	S	gen=m|num=n	0	ROOT	_	_
2-3	dalla	dalla	_	_	_	0	ROOT	_	_
2	da	da	ADP	EA	_	1	adpmod	_	_
3	la	la	DET	RD	gen=f|num=s	4	det	_	_
4	statua	statua	NOUN	S	gen=f|num=s	2	adpobj	_	_
5	.	.	.	FS	_	1	p	_	_

1	Evacuata	evacuare	VERB	V	gen=f|mod=p|num=s	3	partmod	_	_
2	la	il	DET	RD	gen=f|num=s	3	det	_	_
3	Tate	Tate	NOUN	SP	_	0	ROOT	_	_
4	Gallery	Gallery	NOUN	SP	_	3	mwe	_	_
5	.	.	.	FS	_	3	p	_	_

</div>

### trailing-tab.conll

<div class="conllu-parse" tabs="yes">
# not valid: extra TAB before newline
1	non-valid	non-valid	NOUN	SP	_	0	ROOT	_	_	

</div>