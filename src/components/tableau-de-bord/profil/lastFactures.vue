<template>
  <div>
    <h5 class="is-size-5 has-text-grid-2 mb-20">Dernières factures</h5>
    <b-table
      :data="data"
      id="list_last_factures">

      <template slot-scope="props">
        <b-table-column
          field="libelle"
          label="LIBELLE"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.libelle }}
        </b-table-column>
        <b-table-column
          field="numero"
          label="NUMERO"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.numero }}
        </b-table-column>
        <b-table-column
          field="partenaire"
          label="PARTENAIRE"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.partenaire }}
        </b-table-column>
        <b-table-column
          field="client"
          label="CLIENT"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.client }}
        </b-table-column>
        <b-table-column
          field="id_client"
          label="ID CLIENT"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.id_client }}
        </b-table-column>
        <b-table-column
          field="montant"
          label="MONTANT"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.montant }}
        </b-table-column>
        <b-table-column
          label="OPTION"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          <b-button
            type="is-success"
            icon-right="eye"
            rounded>
            <span class="is-size-7">Detail</span>
          </b-button>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon
                  icon="emoticon-sad"
                  size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: [
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
    ],
  }),
};
</script>

<style>

</style>
